"use client";
import React from 'react';
import { MapPin, DollarSign } from 'lucide-react';

const NewProperty = () => {
	const landListings = [
		{
			id: 1,
			title: "Adelaide Creek – Eldoret",
			location: "Eldoret, Uasin Gishu County",
			price: 2500000,
			size: "1/4 Acre",
			description: "Prime plots in a serene environment, perfect for residential development.",
			image: "https://sic.co.ke/wp-content/uploads/classified-listing/2024/10/adelaidecreekeldoretbySIC.jpg"
		},
		{
			id: 2,
			title: "Brookvale Tuala",
			location: "Rongai, Kajiado County",
			price: 1400000,
			size: "1/4 Acre",
			description: "Spacious plots with great views, ideal for both residential and commercial use.",
			image: "https://sic.co.ke/wp-content/uploads/classified-listing/2024/09/tuala.jpg"
		},
		{
			id: 3,
			title: "Kiambu Marina Gardens",
			location: "Kiambu, Kiambu County",
			price: 3200000,
			size: "1/2 Acre",
			description: "Large plots in a gated community with modern amenities and security.",
			image: "https://sic.co.ke/wp-content/uploads/classified-listing/2024/09/kiambu.jpg"
		}
	];

	return (
		<div>
			<section className="py-16 bg-gray-100">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl text-black font-bold mb-8 text-center">Featured Land Listings</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{landListings.map((listing) => (
							<div key={listing.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
								<img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" />
								<div className="p-6">
									<h3 className="text-xl text-black font-semibold mb-2">{listing.title}</h3>
									<div className="flex items-center mb-2">
										<MapPin className="text-green-600 mr-2" size={18} />
										<span className='text-black'>{listing.location}</span>
									</div>
									<div className="flex items-center mb-2">
										{/* <DollarSign className="text-green-600 mr-2" size={18} /> */}
										<span className="text-lg font-bold text-black">Kshs{listing.price.toLocaleString()}</span>
									</div>
									<p className="text-sm text-gray-600 mb-4">{listing.size} | {listing.description}</p>
									<a href="/contact" className="block w-full">
										<button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors">
											Learn More
										</button>
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

export default NewProperty;
