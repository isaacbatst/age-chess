export default function Pattern({ id, size, link }){
  return <defs>
  <pattern id={id} patternUnits="objectBoundingBox" x={0} y={0} width={size.x} height={size.y}>
    <image xlinkHref={link} x={size.x / 2.5} y={size.y / 2.5} width={size.x * 1.1} height={size.y * 1.1} />
  </pattern>
</defs>
}