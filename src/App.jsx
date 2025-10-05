import { useState } from 'react'

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="min-h-screen bg-gray-100">
			{/* Header */}
			<header className="bg-white shadow-sm">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center py-4">
						<div className="flex items-center">
							<h1 className="text-2xl font-bold text-gray-900">
								React + Tailwind Template
							</h1>
						</div>
						<nav className="hidden md:flex space-x-8">
							<a
								href="#"
								className="text-gray-500 hover:text-gray-900"
							>
								Home
							</a>
							<a
								href="#"
								className="text-gray-500 hover:text-gray-900"
							>
								About
							</a>
							<a
								href="#"
								className="text-gray-500 hover:text-gray-900"
							>
								Contact
							</a>
						</nav>
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
				<div className="px-4 py-6 sm:px-0">
					<div className="text-center mb-12">
						<h2 className="text-4xl font-extrabold text-gray-900 mb-4">
							Welcome to Your New Template
						</h2>
						<p className="text-xl text-gray-600 mb-8">
							Built with React, Vite, and Tailwind CSS
						</p>
						<button
							onClick={() => setCount(count + 1)}
							className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
						>
							Click me! Count: {count}
						</button>
					</div>

					{/* Demo Cards */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
						<div className="bg-white overflow-hidden shadow rounded-lg">
							<div className="p-5">
								<div className="flex items-center">
									<div className="flex-shrink-0">
										<div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
											<span className="text-white text-sm font-bold">
												R
											</span>
										</div>
									</div>
									<div className="ml-5 w-0 flex-1">
										<dl>
											<dt className="text-sm font-medium text-gray-500 truncate">
												React
											</dt>
											<dd className="text-lg font-medium text-gray-900">
												Component Library
											</dd>
										</dl>
									</div>
								</div>
							</div>
						</div>

						<div className="bg-white overflow-hidden shadow rounded-lg">
							<div className="p-5">
								<div className="flex items-center">
									<div className="flex-shrink-0">
										<div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
											<span className="text-white text-sm font-bold">
												V
											</span>
										</div>
									</div>
									<div className="ml-5 w-0 flex-1">
										<dl>
											<dt className="text-sm font-medium text-gray-500 truncate">
												Vite
											</dt>
											<dd className="text-lg font-medium text-gray-900">
												Build Tool
											</dd>
										</dl>
									</div>
								</div>
							</div>
						</div>

						<div className="bg-white overflow-hidden shadow rounded-lg">
							<div className="p-5">
								<div className="flex items-center">
									<div className="flex-shrink-0">
										<div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
											<span className="text-white text-sm font-bold">
												T
											</span>
										</div>
									</div>
									<div className="ml-5 w-0 flex-1">
										<dl>
											<dt className="text-sm font-medium text-gray-500 truncate">
												Tailwind CSS
											</dt>
											<dd className="text-lg font-medium text-gray-900">
												Utility Framework
											</dd>
										</dl>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Buttons Demo */}
					<div className="mb-12">
						<h3 className="text-2xl font-bold text-gray-900 mb-4">
							Button Variants
						</h3>
						<div className="flex flex-wrap gap-4">
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
								Primary
							</button>
							<button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
								Secondary
							</button>
							<button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
								Success
							</button>
							<button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
								Danger
							</button>
							<button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
								Warning
							</button>
						</div>
					</div>

					{/* Form Demo */}
					<div className="bg-white shadow rounded-lg p-6">
						<h3 className="text-2xl font-bold text-gray-900 mb-4">
							Sample Form
						</h3>
						<form className="space-y-4">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium text-gray-700"
								>
									Name
								</label>
								<input
									type="text"
									id="name"
									className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
									placeholder="Enter your name"
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium text-gray-700"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
									placeholder="Enter your email"
								/>
							</div>
							<button
								type="submit"
								className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
							>
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
