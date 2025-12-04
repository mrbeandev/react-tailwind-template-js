import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="min-h-screen bg-gray-100">
			{/* Header */}
			<header className="bg-white shadow-sm">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between py-4">
						<div className="flex items-center">
							<h1 className="text-2xl font-bold text-gray-900">React + Tailwind Template</h1>
						</div>
						<nav className="hidden space-x-8 md:flex">
							<a href="#" className="text-gray-500 hover:text-gray-900">
								Home
							</a>
							<a href="#" className="text-gray-500 hover:text-gray-900">
								About
							</a>
							<a href="#" className="text-gray-500 hover:text-gray-900">
								Contact
							</a>
						</nav>
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<main className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
				<div className="px-4 py-6 sm:px-0">
					<div className="mb-12 text-center">
						<h2 className="mb-4 text-4xl font-extrabold text-gray-900">Welcome to Your New Template</h2>
						<p className="mb-8 text-xl text-gray-600">Built with React, Vite, and Tailwind CSS</p>
						<button onClick={() => setCount(count + 1)} className="rounded-lg bg-blue-600 px-4 py-2 font-bold text-white transition duration-300 hover:bg-blue-700">
							Click me! Count: {count}
						</button>
					</div>

					{/* Demo Cards */}
					<div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
						<div className="overflow-hidden rounded-lg bg-white shadow">
							<div className="p-5">
								<div className="flex items-center">
									<div className="flex-shrink-0">
										<div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500">
											<span className="text-sm font-bold text-white">R</span>
										</div>
									</div>
									<div className="ml-5 w-0 flex-1">
										<dl>
											<dt className="truncate text-sm font-medium text-gray-500">React</dt>
											<dd className="text-lg font-medium text-gray-900">Component Library</dd>
										</dl>
									</div>
								</div>
							</div>
						</div>

						<div className="overflow-hidden rounded-lg bg-white shadow">
							<div className="p-5">
								<div className="flex items-center">
									<div className="flex-shrink-0">
										<div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500">
											<span className="text-sm font-bold text-white">V</span>
										</div>
									</div>
									<div className="ml-5 w-0 flex-1">
										<dl>
											<dt className="truncate text-sm font-medium text-gray-500">Vite</dt>
											<dd className="text-lg font-medium text-gray-900">Build Tool</dd>
										</dl>
									</div>
								</div>
							</div>
						</div>

						<div className="overflow-hidden rounded-lg bg-white shadow">
							<div className="p-5">
								<div className="flex items-center">
									<div className="flex-shrink-0">
										<div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
											<span className="text-sm font-bold text-white">T</span>
										</div>
									</div>
									<div className="ml-5 w-0 flex-1">
										<dl>
											<dt className="truncate text-sm font-medium text-gray-500">Tailwind CSS</dt>
											<dd className="text-lg font-medium text-gray-900">Utility Framework</dd>
										</dl>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Buttons Demo */}
					<div className="mb-12">
						<h3 className="mb-4 text-2xl font-bold text-gray-900">Button Variants</h3>
						<div className="flex flex-wrap gap-4">
							<button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">Primary</button>
							<button className="rounded bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-700">Secondary</button>
							<button className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700">Success</button>
							<button className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700">Danger</button>
							<button className="rounded bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-700">Warning</button>
						</div>
					</div>

					{/* Form Demo */}
					<div className="rounded-lg bg-white p-6 shadow">
						<h3 className="mb-4 text-2xl font-bold text-gray-900">Sample Form</h3>
						<form className="space-y-4">
							<div>
								<label htmlFor="name" className="block text-sm font-medium text-gray-700">
									Name
								</label>
								<input type="text" id="name" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none" placeholder="Enter your name" />
							</div>
							<div>
								<label htmlFor="email" className="block text-sm font-medium text-gray-700">
									Email
								</label>
								<input type="email" id="email" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none" placeholder="Enter your email" />
							</div>
							<button type="submit" className="rounded-lg bg-blue-600 px-4 py-2 font-bold text-white transition duration-300 hover:bg-blue-700">
								Submit
							</button>
						</form>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
