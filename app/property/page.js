import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bed, Bath, Square } from 'lucide-react'

// Mock data - replace with actual data fetching in a real application
const properties = [
  {
    id: '1',
    title: 'Luxurious Beachfront Villa',
    price: 2500000,
    bedrooms: 5,
    bathrooms: 4,
    area: 4500,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: '2',
    title: 'Modern City Apartment',
    price: 750000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwYXBhcnRtZW50fGVufDB8fDB8fHww',
  },
  // Add more properties as needed
]

export default function PropertiesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Featured Properties</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <Link href={`/properties/${property.id}`} key={property.id}>
            <Card className="hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  style={{objectFit: "cover"}}
                  className="rounded-t-lg"
                />
              </div>
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2">{property.title}</h2>
                <p className="text-2xl font-bold mb-4">${property.price.toLocaleString()}</p>
                <div className="flex justify-between">
                  <Badge variant="secondary" className="flex items-center">
                    <Bed className="mr-1" size={16} />
                    {property.bedrooms}
                  </Badge>
                  <Badge variant="secondary" className="flex items-center">
                    <Bath className="mr-1" size={16} />
                    {property.bathrooms}
                  </Badge>
                  <Badge variant="secondary" className="flex items-center">
                    <Square className="mr-1" size={16} />
                    {property.area} sqft
                  </Badge>
                </div>
              </CardContent>
              <CardFooter className="bg-primary text-primary-foreground p-2 text-center rounded-b-lg">
                View Details
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}