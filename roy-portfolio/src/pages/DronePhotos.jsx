import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Camera, MapPin, Calendar, ChevronLeft, ChevronRight, X } from 'lucide-react';

const DronePhotos = () => {
  const [selectedImage, setSelectedImage] = useState(null);
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

  const openLightbox = (photo) => {
    setSelectedImage(photo);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateLightbox = (direction) => {
    if (!selectedImage) return;
    const currentIndex = filteredPhotos.findIndex(p => p.src === selectedImage.src);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredPhotos.length;
    } else {
      newIndex = currentIndex === 0 ? filteredPhotos.length - 1 : currentIndex - 1;
    }
    
    setSelectedImage(filteredPhotos[newIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowRight') navigateLightbox('next');
      if (e.key === 'ArrowLeft') navigateLightbox('prev');
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => openLightbox(photo)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow bg-gray-200 aspect-[4/3]">
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
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                      loadedImages[photo.src] ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-semibold">{photo.title}</h3>
                      <p className="text-sm opacity-90">{photo.location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
          
          <div className="relative max-w-7xl max-h-[90vh] mx-auto px-4" onClick={e => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[85vh] object-contain mx-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
              <h2 className="text-2xl font-bold mb-2">{selectedImage.title}</h2>
              <p className="text-lg">
                <MapPin className="inline w-5 h-5 mr-2" />
                {selectedImage.location} • {selectedImage.category}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default DronePhotos;