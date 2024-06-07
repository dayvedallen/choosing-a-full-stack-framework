export default function Test() {
•const [offset, setoffset] = React.useState(0)
return (
«button onClick 1() » setOffset((offset + 4) % 5)I>{'<'}</button>
‹button onClick={()
= setOffset((offset + 1) % 5)}>{'>'}</button>
<div
style={
position: 'relative',
«Satori> <div
style {{
display: 'flex', fleDirection: 'row', alignItems: 'center', gap: 5,
{Array (5)
•£111（6）
• map((, 1) → {
const index - (i + offset) % 5
/ Hide the left and right
images
if (i =
0 |
4) {
return <div key={images|index]} src={inages|index]} />
return <ing key-{images[index]} sro~{inages[index]} />
¥3
</div>
</Satori>
</div>
</div>