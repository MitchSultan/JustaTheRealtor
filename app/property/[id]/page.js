import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bed, Bath, Square, MapPin, Phone, Mail } from 'lucide-react'

// This is a mock function. In a real app, you'd fetch data from an API or database.
async function getProperty () {
  // Simulating an API call
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Mock data
  const properties = {
    '1': {
      id: '1',
      title: 'Luxurious Beachfront Villa',
      description: 'Experience the ultimate in coastal living with this stunning beachfront villa. Panoramic ocean views, private beach access, and world-class amenities await.',
      price: 2500000,
      bedrooms: 5,
      bathrooms: 4,
      area: 4500,
      address: '123 Oceanview Drive, Malibu, CA 90265',
      images: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGx1eHVyeSUyMGhvbWV8ZW58MHx8MHx8fDA%3D',
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJ5JTIwaG9tZXxlbnwwfHwwfHx8MA%3D%3D'
      ],
      features: ['Ocean View', 'Private Beach', 'Infinity Pool', 'Home Theater', 'Wine Cellar'],
      agent: {
        name: 'Jane Doe',
        phone: '+1 (310) 555-1234',
        email: 'jane.doe@realestate.com'
      }
    },
    // Add more properties as needed
  }
  
  return properties[id] || null
}

export default async function PropertyPage({ params }) {
  const property = await getProperty(params.id)

  if (!property) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{property.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="relative h-96 mb-4">
            <Image
              src={property.images[0]}
              alt={property.title}
              fill
              style={{objectFit: "cover"}}
              className="rounded-lg"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {property.images.slice(1).map((image, index) => (
              <div key={index} className="relative h-24">
                <Image
                  src={image}
                  alt={`${property.title} - Image ${index + 2}`}
                  fill
                  style={{objectFit: "cover"}}
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl font-bold">${property.price.toLocaleString()}</CardTitle>
              <CardDescription>{property.address}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-4">
                <div className="flex items-center">
                  <Bed className="mr-2" />
                  <span>{property.bedrooms} Beds</span>
                </div>
                <div className="flex items-center">
                  <Bath className="mr-2" />
                  <span>{property.bathrooms} Baths</span>
                </div>
                <div className="flex items-center">
                  <Square className="mr-2" />
                  <span>{property.area} sqft</span>
                </div>
              </div>
              <p className="mb-4">{property.description}</p>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Features:</h3>
                <div className="flex flex-wrap gap-2">
                  {property.features.map((feature, index) => (
                    <Badge key={index} variant="secondary">{feature}</Badge>
                  ))}
                </div>
              </div>
              <div className="border-t pt-4">
                <h3 className="font-semibold mb-2">Contact Agent:</h3>
                <p className="font-medium">{property.agent.name}</p>
                <div className="flex items-center mt-2">
                  <Phone className="mr-2" size={16} />
                  <span>{property.agent.phone}</span>
                </div>
                <div className="flex items-center mt-1">
                  <Mail className="mr-2" size={16} />
                  <span>{property.agent.email}</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="mt-4 flex gap-4">
            <Button className="flex-1">Schedule a Tour</Button>
            <Button variant="outline" className="flex-1">Request Info</Button>
          </div>
        </div>
      </div>
    </div>
  )
}