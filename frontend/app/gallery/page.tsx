// Define the structure of a Video object
"use client";

import BlurFade from "@/components/magicui/blur-fade";
import Sidebar from "../sidebar";
import { useState } from "react";

export default function GalleryClientComponent({ initialVideos }: any) {
	// Function to calculate dynamic width and height

	const calculateDimensions = (index: number) => {
		const baseWidth = 400;
		const baseHeight = 450;
		const width = baseWidth + (index % 3) * 50; // Example dynamic width calculation
		const height = baseHeight + (index % 3) * 50; // Example dynamic height calculation
		return { width, height };
	};

	return (
		<>
			<div className="no-scrollbar w-screen h-screen overflow-y-scroll">
				<div className="w-full h-full flex p-2 gap-6 place-items-start">
					<Sidebar />

					<div className="w-full h-full overflow-y-scroll no-scrollbar flex flex-col p-4 place-items-start">
						<div className="w-full h-full">
							<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 p-4">
								{initialVideos
									?.slice()
									.reverse()
									.map((video: any, index: number) => {
										// const { width, height } = calculateDimensions(index);
										return (
											<BlurFade
												className="overflow-hidden rounded-lg h-[450px]"
												key={index}
												delay={0.25 + index * 0.1}
												inView
											>
												<div
													className="w-full h-full"
													// style={{ width: `${width}px`, height: `${height}px` }}
												>
													<video
														muted
														autoPlay
														loop
														className="w-full h-full object-cover hover:scale-110 transform transition-transform duration-300"
													>
														<source src={video.url} type="video/mp4" />
														Your browser does not support the video tag.
													</video>
												</div>
											</BlurFade>
										);
									})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
