import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), {
  ssr: false
})

export default function Home() {
  return (
    <Map
      places={[
        {
          id: '1',
          name: 'Petrópolis',
          slug: 'petropolis',
          location: {
            latitude: 0,
            longitude: 0
          }
        },

        {
          id: '2',
          name: 'Rio de Janeiro',
          slug: 'rio-de-janeiro',
          location: {
            latitude: 45,
            longitude: -10
          }
        }
      ]}
    />
  )
}
