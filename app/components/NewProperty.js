"use client";
import React, { useState } from 'react';
import { MapPin, FileDown } from 'lucide-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
			price: 1500000,
			size: "1/8 Acre",
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
		},
		{
			id: 4,
			title: "The Miran Residence",
			location: "ruaka",
			price: 3200000,
			size: "studio apartment",
			description: "Large plots in a gated community with modern amenities and security.",
			image: "https://sic.co.ke/wp-content/uploads/classified-listing/2024/09/kiambu.jpg"
		},
		{
			id: 5,
			title: "The Zaria village",
			location: "Kiambu, Kiambu county",
			price: 8400000,
			size: "1/4 Acre",
			description: "Large plots in a gated community with modern amenities and security.",
			image: "https://sic.co.ke/wp-content/uploads/classified-listing/2024/09/kiambu.jpg"
		},
		{
			id: 6,
			title: "Olpajeta Ridge",
			location: "Nanyuki, Laikipia County",
			price: 589000,
			size: "1/4 Acre",
			description: "Large plots in a gated community with modern amenities and security.",
			image: "https://sic.co.ke/wp-content/uploads/classified-listing/2024/09/kiambu.jpg"
		},
		{
			id: 7,
			title: "Kijani plains Katani",
			location: "katani",
			price: 3300000,
			size: "1/8 Acre",
			description: "Large plots in a gated community with modern amenities and security.",
			image: "https://sic.co.ke/wp-content/uploads/classified-listing/2024/09/kiambu.jpg"
		}
	];

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		],
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />
	};

	function SampleNextArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={`${className} !top-[100%] !right-1/2 !translate-x-[60px] !mt-4 !bg-green-600 !rounded-full`}
				style={{ ...style, display: "block" }}
				onClick={onClick}
			/>
		);
	}
	
	function SamplePrevArrow(props) {
		const { className, style, onClick } = props;
		return (
			<div
				className={`${className} !top-[100%] !left-1/2 !translate-x-[-60px] !mt-4 !bg-green-600 !rounded-full`}
				style={{ ...style, display: "block" }}
				onClick={onClick}
			/>
		);
	}

	const [tooltipVisible, setTooltipVisible] = useState(null);

	return (
		<div>
			<section className="py-16 bg-gray-100">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl text-black font-bold mb-8 text-center">Featured Land Listings</h2>
					
					<div className="relative pb-16">
						<Slider {...settings}>
							{landListings.map((listing) => (
								<div key={listing.id} className="px-2">
									<div className="bg-white rounded-lg overflow-hidden shadow-lg">
										<img src={listing.image} alt={listing.title} className="w-full h-48 object-cover" />
										<div className="p-6">
											<h3 className="text-xl text-black font-semibold mb-2">{listing.title}</h3>
											<div className="flex items-center mb-2">
												<MapPin className="text-green-600 mr-2" size={18} />
												<span className='text-black'>{listing.location}</span>
											</div>
											<div className="flex items-center mb-2">
												<span className="text-lg font-bold text-black">Kshs{listing.price.toLocaleString()}</span>
											</div>
											<p className="text-sm text-gray-600 mb-4">{listing.size} | {listing.description}</p>
											<div className="flex justify-between items-center mt-4">
												<a href="/contact" className="block">
													<button className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors">
														Learn More
													</button>
												</a>
												<div className="relative">
													<a 
														href="/hillsview.pdf" 
														target="_blank" 
														rel="noopener noreferrer" 
														download 
														className="block"
														onMouseEnter={() => setTooltipVisible(listing.id)}
														onMouseLeave={() => setTooltipVisible(null)}
													>
														<FileDown className="text-blue-600 hover:text-blue-700 transition-colors" size={24} />
													</a>
													{tooltipVisible === listing.id && (
														<div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded shadow-lg">
															Download PDF
															<div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
														</div>
													)}
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
						</Slider>
					</div>
				</div>
			</section>
		</div>
	);
}

export default NewProperty;
