import { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, MapPin, Calendar } from 'lucide-react';

const DronePhotos = () => {
  const [loadedImages, setLoadedImages] = useState({});

  const photos = [
    // North Carolina Beach Photos
    { src: '/assets/drone_photos_optimized/NC_beach.jpg', location: 'North Carolina', category: 'Beach', title: 'NC Beach Aerial View' },
    { src: '/assets/drone_photos_optimized/NC_dolphin_couple.jpg', location: 'North Carolina', category: 'Wildlife', title: 'Dolphin Couple' },
    { src: '/assets/drone_photos_optimized/NC_dolphin_pod.jpg', location: 'North Carolina', category: 'Wildlife', title: 'Dolphin Pod' },
    
    // Seattle Photos
    { src: '/assets/drone_photos_optimized/seattle_boat.jpg', location: 'Seattle', category: 'Maritime', title: 'Seattle Boat' },
    { src: '/assets/drone_photos_optimized/seattle_boats_kayak.jpg', location: 'Seattle', category: 'Maritime', title: 'Boats and Kayak' },
    { src: '/assets/drone_photos_optimized/seattle_bridge.jpg', location: 'Seattle', category: 'Infrastructure', title: 'Seattle Bridge' },
    { src: '/assets/drone_photos_optimized/seattle_crane.jpg', location: 'Seattle', category: 'Industrial', title: 'Seattle Crane' },
    { src: '/assets/drone_photos_optimized/seattle_cranes.jpg', location: 'Seattle', category: 'Industrial', title: 'Seattle Cranes' },
    { src: '/assets/drone_photos_optimized/seattle_dock.jpg', location: 'Seattle', category: 'Maritime', title: 'Seattle Dock' },
    { src: '/assets/drone_photos_optimized/seattle_dock2.jpg', location: 'Seattle', category: 'Maritime', title: 'Seattle Dock 2' },
    { src: '/assets/drone_photos_optimized/seattle_kayak.jpg', location: 'Seattle', category: 'Maritime', title: 'Seattle Kayak' },
    { src: '/assets/drone_photos_optimized/seattle_locks.jpg', location: 'Seattle', category: 'Infrastructure', title: 'Seattle Locks' },
    { src: '/assets/drone_photos_optimized/seattle_locks2.jpg', location: 'Seattle', category: 'Infrastructure', title: 'Seattle Locks 2' },
    { src: '/assets/drone_photos_optimized/seattle_onlookers.jpg', location: 'Seattle', category: 'People', title: 'Seattle Onlookers' },
    
    // Toronto Photos
    { src: '/assets/drone_photos_optimized/toronto_construction.jpg', location: 'Toronto', category: 'Urban', title: 'Toronto Construction' },
    { src: '/assets/drone_photos_optimized/toronto_culdesac.jpg', location: 'Toronto', category: 'Urban', title: 'Toronto Cul-de-sac' },
    { src: '/assets/drone_photos_optimized/toronto_downtown.jpg', location: 'Toronto', category: 'Urban', title: 'Toronto Downtown' },
    { src: '/assets/drone_photos_optimized/toronto_ducks.jpg', location: 'Toronto', category: 'Wildlife', title: 'Toronto Ducks' },
    { src: '/assets/drone_photos_optimized/toronto_garden_top.jpg', location: 'Toronto', category: 'Urban', title: 'Toronto Garden Top View' },
    { src: '/assets/drone_photos_optimized/toronto_snow_construction.jpg', location: 'Toronto', category: 'Winter', title: 'Toronto Snow Construction' },
    { src: '/assets/drone_photos_optimized/toronto_snow_covered_dome.jpg', location: 'Toronto', category: 'Winter', title: 'Toronto Snow Covered Dome' },
    { src: '/assets/drone_photos_optimized/toronto_snow_path.jpg', location: 'Toronto', category: 'Winter', title: 'Toronto Snow Path' },
    { src: '/assets/drone_photos_optimized/toronto_snow_path_river.jpg', location: 'Toronto', category: 'Winter', title: 'Toronto Snow Path River' },
    { src: '/assets/drone_photos_optimized/toronto_snowwy_tracks.jpg', location: 'Toronto', category: 'Winter', title: 'Toronto Snowy Tracks' },
    { src: '/assets/drone_photos_optimized/toronto_snowy_tractors.jpg', location: 'Toronto', category: 'Winter', title: 'Toronto Snowy Tractors' },
    { src: '/assets/drone_photos_optimized/toronto_train_angled.jpg', location: 'Toronto', category: 'Transportation', title: 'Toronto Train Angled' },
    { src: '/assets/drone_photos_optimized/toronto_train_tracks.jpg', location: 'Toronto', category: 'Transportation', title: 'Toronto Train Tracks' },
    
    { src: '/assets/drone_photos_optimized/0447.jpg', location: 'Boston', category: 'Sports', title: 'Bike Polo Aerial' },
    
    { src: '/assets/drone_photos_optimized/0907.jpg', location: 'Norway', category: 'Nature', title: 'Waters of Senja' },
    
    { src: '/assets/drone_photos_optimized/0913.jpg', location: 'Norway', category: 'Nature', title: 'Waters of Senja' },
    
    { src: '/assets/drone_photos_optimized/0864.jpg', location: 'Norway', category: 'Nature', title: 'Segla' },
    
    { src: '/assets/drone_photos_optimized/0741.jpg', location: 'Norway', category: 'Nature', title: 'Beaches of Tromso' },
    
    { src: '/assets/drone_photos_optimized/0988.jpg', location: 'Norway', category: 'Nature', title: 'Husfjellet from afar' },
    
    { src: '/assets/drone_photos_optimized/0748.jpg', location: 'Norway', category: 'Nature', title: 'Seabirds of Norway' },
    
    { src: '/assets/drone_photos_optimized/0003_rotated.jpg', location: 'Norway', category: 'Nature', title: 'A waterfall somewhere in Northern Norway' },
    
    { src: '/assets/drone_photos_optimized/0896.jpg', location: 'Norway', category: 'Nature', title: 'Another view of a beach in Senja' },
    
    { src: '/assets/drone_photos_optimized/0894.jpg', location: 'Norway', category: 'Nature', title: 'A beach in Senja' },
    
    { src: '/assets/drone_photos_optimized/0881.jpg', location: 'Norway', category: 'Nature', title: 'A green path down Segla' },
    
    { src: '/assets/drone_photos_optimized/0895.jpg', location: 'Norway', category: 'Nature', title: 'Another beach of Senja' },
    
    { src: '/assets/drone_photos_optimized/0868.jpg', location: 'Norway', category: 'Nature', title: 'Segla' },
    
    // Other
    { src: '/assets/drone_photos_optimized/tobermory.jpg', location: 'Tobermory', category: 'Landscape', title: 'Tobermory Aerial' }
  ];

  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const locations = ['all', ...new Set(photos.map(p => p.location))];
  const categories = ['all', ...new Set(photos.map(p => p.category))];

  const filteredPhotos = photos.filter(photo => {
    const locationMatch = selectedLocation === 'all' || photo.location === selectedLocation;
    const categoryMatch = selectedCategory === 'all' || photo.category === selectedCategory;
    return locationMatch && categoryMatch;
  });

  const handleImageLoad = (src) => {
    setLoadedImages(prev => ({ ...prev, [src]: true }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center">
              <Camera className="w-10 h-10 mr-3 text-primary-600" />
              Drone Photography
            </h1>
            <p className="text-xl text-gray-600">Aerial perspectives from various locations</p>
            <p className="text-sm text-gray-500 mt-4">
              Higher resolution versions available upon request.{' '}
              <a 
                href="https://github.com/RoyRin/RoyRin.github.io/tree/master/original_website/assets/drone_photos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                View originals on GitHub
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="inline w-4 h-4 mr-1" />
                Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {locations.map(location => (
                  <option key={location} value={location}>
                    {location.charAt(0).toUpperCase() + location.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="inline w-4 h-4 mr-1" />
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
          
          <p className="mt-4 text-sm text-gray-600">
            Showing {filteredPhotos.length} of {photos.length} photos
          </p>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow bg-gray-200 aspect-[4/3]">
                  {!loadedImages[photo.src] && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="animate-pulse text-gray-400">Loading...</div>
                    </div>
                  )}
                  <img
                    src={photo.src}
                    alt={photo.title}
                    loading="lazy"
                    onLoad={() => handleImageLoad(photo.src)}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${
                      loadedImages[photo.src] ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-black">
                      <h3 className="font-semibold">{photo.title}</h3>
                      <p className="text-sm opacity-75">{photo.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DronePhotos;