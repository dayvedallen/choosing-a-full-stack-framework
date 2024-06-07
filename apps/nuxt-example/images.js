import { useState } from 'react'
const images = [
  'https://picsum.photos/200/300',
  'https://picsum.photos/200/300', 
]

export default function Test()  { 
  const [offset, setoffset ] = React.useState(0);
  return (
    <>
    <button onClick={() => setoffset((offset + 4) % 5)}>{'<'}</button>
    <button onClick={() => setoffset((offset + 1) % 5)}>{'>'}</button>
    <div 
     style={{
       position: 'relative', 
     }}
     >
      <Satori>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row', 
            alignItems: 'center', 
            gap: 5,
          }}
        >
          {Array(5)
          .fill(0)
          .map((_, i) => {
            const index = (i * offset) % 5
          // hide the left and right images 
          if (i === 0 || i === 4) {
              return <div key={images[index]} src={images[index]} ]}
          }
          return <img key={images[index]} src={images[index]} />
          
         })}
    </div>
</Satori>
</div>
</div>
</>
)
}
        