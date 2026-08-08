const toRad = (deg: number) => (deg * Math.PI) / 180
const toDeg = (rad: number) => (rad * 180) / Math.PI

/** Ramène un écart d'angle dans l'intervalle [-180, 180]. */
function normalizeAngleDiff(deg: number): number {
  let d = deg % 360
  if (d > 180) d -= 360
  if (d < -180) d += 360
  return d
}

export type AltimeterUnit = 'hpa' | 'inHg'

export interface PressureAltitudeInput {
  fieldElevationFt: number
  altimeterSetting: number
  unit: AltimeterUnit
}

export function pressureAltitudeFt({
  fieldElevationFt,
  altimeterSetting,
  unit,
}: PressureAltitudeInput): number {
  return unit === 'hpa'
    ? fieldElevationFt + (1013.25 - altimeterSetting) * 30
    : fieldElevationFt + (29.92 - altimeterSetting) * 1000
}

export interface DensityAltitudeInput {
  pressureAltitudeFt: number
  oatC: number
}

export function isaTempAtAltitudeC(pressureAltitudeFt: number): number {
  return 15 - 2 * (pressureAltitudeFt / 1000)
}

export function densityAltitudeFt({ pressureAltitudeFt, oatC }: DensityAltitudeInput): number {
  const isaTemp = isaTempAtAltitudeC(pressureAltitudeFt)
  return pressureAltitudeFt + 120 * (oatC - isaTemp)
}

export function cloudBaseAglFt(tempC: number, dewPointC: number): number {
  return Math.max(0, (tempC - dewPointC) * 400)
}

export interface WindTriangleInput {
  trueCourseDeg: number
  trueAirspeedKt: number
  windFromDeg: number
  windSpeedKt: number
}

export interface WindTriangleResult {
  windCorrectionAngleDeg: number
  trueHeadingDeg: number
  groundSpeedKt: number
}

export function solveWindTriangle({
  trueCourseDeg,
  trueAirspeedKt,
  windFromDeg,
  windSpeedKt,
}: WindTriangleInput): WindTriangleResult {
  const relativeWindAngle = toRad(normalizeAngleDiff(windFromDeg - trueCourseDeg))
  const sinWca = (windSpeedKt * Math.sin(relativeWindAngle)) / trueAirspeedKt
  const wcaRad = Math.asin(Math.max(-1, Math.min(1, sinWca)))
  const wcaDeg = toDeg(wcaRad)

  const groundSpeedKt =
    trueAirspeedKt * Math.cos(wcaRad) - windSpeedKt * Math.cos(relativeWindAngle)

  let trueHeadingDeg = trueCourseDeg + wcaDeg
  trueHeadingDeg = ((trueHeadingDeg % 360) + 360) % 360

  return { windCorrectionAngleDeg: wcaDeg, trueHeadingDeg, groundSpeedKt }
}

export interface RunwayWindInput {
  runwayHeadingDeg: number
  windFromDeg: number
  windSpeedKt: number
}

export interface RunwayWindResult {
  headwindKt: number
  crosswindKt: number
  crosswindSide: 'gauche' | 'droite' | 'nul'
}

export function runwayWindComponents({
  runwayHeadingDeg,
  windFromDeg,
  windSpeedKt,
}: RunwayWindInput): RunwayWindResult {
  const angle = normalizeAngleDiff(windFromDeg - runwayHeadingDeg)
  const rad = toRad(angle)
  const headwindKt = windSpeedKt * Math.cos(rad)
  const crosswindKt = windSpeedKt * Math.sin(rad)
  const crosswindSide = crosswindKt > 0.05 ? 'droite' : crosswindKt < -0.05 ? 'gauche' : 'nul'
  return { headwindKt, crosswindKt: Math.abs(crosswindKt), crosswindSide }
}
