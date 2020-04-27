function docReady(fn) {
  if (
    document.readyState === 'complete' ||
    document.readyState === 'interactive'
  ) {
    setTimeout(fn, 1)
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}

const verticals = [
  'assets/svg/lineas/vertical/amarillo rojo vertical 1.svg',
  'assets/svg/lineas/vertical/amarillo rojo vertical 2.svg',
  'assets/svg/lineas/vertical/axul verdeaqua vertical 1.svg',
  'assets/svg/lineas/vertical/axul verdeaqua vertical 2.svg',
  'assets/svg/lineas/vertical/azul verdeaqua vertical 1.svg',
  'assets/svg/lineas/vertical/azul verdeaqua vertical 2.svg',
  'assets/svg/lineas/vertical/azulaqua naranja vertical 1.svg',
  'assets/svg/lineas/vertical/azulaqua naranja vertical 2.svg',
  'assets/svg/lineas/vertical/morado verde vertical 1.svg',
  'assets/svg/lineas/vertical/morado verde vertical 2.svg',
  'assets/svg/lineas/vertical/naranja rosa vertical 1.svg',
  'assets/svg/lineas/vertical/naranja rosa vertical 2.svg',
  'assets/svg/lineas/vertical/naranjamarillo azul vertical 1.svg',
  'assets/svg/lineas/vertical/naranjamarillo azul vertical 2.svg',
  'assets/svg/lineas/vertical/rojo y lila vertical 1.svg',
  'assets/svg/lineas/vertical/rojo y lila vertical 2.svg',
  'assets/svg/lineas/vertical/rosa amarillo vertical 1.svg',
  'assets/svg/lineas/vertical/rosa amarillo vertical 2.svg',
  'assets/svg/lineas/vertical/rosa azul verticL 1.svg',
  'assets/svg/lineas/vertical/rosa azul verticL 2.svg',
  'assets/svg/lineas/vertical/verde rosa vertical 1.svg',
  'assets/svg/lineas/vertical/verde rosa vertical 2.svg',
]

const regulars = [
  'assets/svg/lineas/verde rosa.svg',
  'assets/svg/lineas/morado verde.svg',
  'assets/svg/lineas/naranja rosa.svg',
  'assets/svg/lineas/naranjamarillo azul.svg',
  'assets/svg/lineas/rojo y lila.svg',
  'assets/svg/lineas/rosa amarillo.svg',
  'assets/svg/lineas/rosa azul.svg',
  'assets/svg/lineas/azulaqua naranja.svg',
  'assets/svg/lineas/amarillo rojo.svg',
  'assets/svg/lineas/axul verdeaqua.svg',
  'assets/svg/lineas/azul verdeaqua.svg',
]

const horizontals = [
  'assets/svg/lineas/horizontal/amarillo rojo horizontal 1.svg',
  'assets/svg/lineas/horizontal/amarillo rojo horizontal 2.svg',
  'assets/svg/lineas/horizontal/axul verdeaqua horizontal 1.svg',
  'assets/svg/lineas/horizontal/axul verdeaqua horizontal 2.svg',
  'assets/svg/lineas/horizontal/azul verdeaqua.horizontal 1svg.svg',
  'assets/svg/lineas/horizontal/azul verdeaqua.horizontal 2.svg',
  'assets/svg/lineas/horizontal/azulaqua naranja horizontal 1.svg',
  'assets/svg/lineas/horizontal/azulaqua naranja horizontal 2.svg',
  'assets/svg/lineas/horizontal/morado verde horizontal 1.svg',
  'assets/svg/lineas/horizontal/morado verde horizontal 2.svg',
  'assets/svg/lineas/horizontal/naranja rosa horizontal 1.svg',
  'assets/svg/lineas/horizontal/naranja rosa horizontal 2.svg',
  'assets/svg/lineas/horizontal/naranjamarillo azul horizontal 1.svg',
  'assets/svg/lineas/horizontal/naranjamarillo azul horizontal 2.svg',
  'assets/svg/lineas/horizontal/rojo y lila horizontal 1.svg',
  'assets/svg/lineas/horizontal/rojo y lila horizontal 2.svg',
  'assets/svg/lineas/horizontal/rosa amarillo horizontal 1.svg',
  'assets/svg/lineas/horizontal/rosa amarillo horizontal 2.svg',
  'assets/svg/lineas/horizontal/rosa azul horizontal 1.svg',
  'assets/svg/lineas/horizontal/rosa azul horizontal 2.svg',
  'assets/svg/lineas/horizontal/verde rosa horizontal 1.svg',
  'assets/svg/lineas/horizontal/verde rosa horizontal 2.svg',
]

const randomUptoNe = n => Math.floor(Math.random() * n)
const last = arr => (last.length ? arr[arr.length - 1] : undefined)
const randomPartitionOf = (
  items,
  { partitionCardinality } = { partitionCardinality: 2 }
) => {
  const partition = []
  const itemsCopy = [...items]
  const setSize = itemsCopy.length
  do {
    if (
      !partition.length ||
      last(partition).length > Math.floor(setSize / partitionCardinality)
    ) {
      partition.push([])
    }
    last(partition).push(...itemsCopy.splice(randomUptoNe(itemsCopy.length), 1))
  } while (itemsCopy.length)
  return partition
}
const randomSelectionOf = (arr, selectionSize = 1) => {
  const selection = []
  const arrCopy = Array.from(arr)
  while (selectionSize--) {
    selection.push(...arrCopy.splice(randomUptoNe(arrCopy.length), 1))
  }
  return selection
}

docReady(() => {
  const lines = [
    {
      partition: randomPartitionOf(
        Array.from(document.getElementsByClassName('line regular'))
      ),
      options: regulars,
    },
    {
      partition: randomPartitionOf(
        Array.from(document.getElementsByClassName('line vertical'))
      ),
      options: verticals,
    },
    {
      partition: randomPartitionOf(
        Array.from(document.getElementsByClassName('line horizontal'))
      ),
      options: horizontals,
    },
  ]

  const animate1 = () =>
    setTimeout(() => {
      for (const { partition, options } of lines) {
        for (const linesList of partition) {
          for (const line of linesList) {
            const newSrc = randomSelectionOf(options)[0]
            line.src = newSrc
          }
        }
      }
      requestAnimationFrame(animate1)
    }, 1000)
  animate1()
})
