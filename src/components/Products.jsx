import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';

const products = [
  { id: 1, name: 'Metal Scrap', description: 'High-quality metal scrap ready for recycling.', image: 'https://media.istockphoto.com/id/466548585/photo/pile-of-aluminium-scrap.webp?a=1&b=1&s=612x612&w=0&k=20&c=lbLFzJnkw8C-DIk8syuwmDLXrZxXO3W7Bnas5GzcqOY=' },
  { id: 2, name: 'Plastic Scrap', description: 'Assorted plastic scrap materials available.', image: 'https://media.istockphoto.com/id/186674795/photo/recycled-plastic-granules.webp?a=1&b=1&s=612x612&w=0&k=20&c=K0J38VdtJld2vHkBey99hhQ-RIdi0741u0hmsMZhuZw=' },
  { id: 3, name: 'Electronic Waste', description: 'Electronic waste items for e-recycling.', image: 'https://media.istockphoto.com/id/185234332/photo/electronics-recycling.webp?a=1&b=1&s=612x612&w=0&k=20&c=oX_hl2VWswGGI83VMvWVN6kR4Fn3wO7jXCciNtlOTSI=' },
  { id: 4, name: 'Paper Waste', description: 'Recyclable paper waste from various sources.', image: 'https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhcGVyJTIwc2NyYXB8ZW58MHx8MHx8fDA%3D' },
  { id: 5, name: 'Rubber Scrap', description: 'Durable rubber scrap suitable for recycling.', image: 'https://images.unsplash.com/photo-1527266258038-6ae3e089a609?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cnViYmVyJTIwc2NyYXB8ZW58MHx8MHx8fDA%3D' },
  { id: 6, name: 'Glass Scrap', description: 'Glass scrap pieces for sustainable reuse.', image: 'https://images.unsplash.com/photo-1545070255-fdc9a55d32f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2xhc3MlMjBzY3JhcHxlbnwwfHwwfHx8MA%3D%3D' },
  { id: 7, name: 'Copper Scrap', description: 'Pure copper scrap for repurposing.', image: 'https://media.istockphoto.com/id/157382021/photo/copper-cable-scrap-metal-recycled.webp?a=1&b=1&s=612x612&w=0&k=20&c=Mu9rXCKQMYzkSRt3-1ngFX80iuWrjVbt9OgRbo4T02U=' },
  { id: 8, name: 'Steel Scrap', description: 'High-quality steel scrap from various sources.', image: 'https://media.istockphoto.com/id/133993678/photo/close-up-photo-of-silver-color-scrap-metal-and-metal-trash.webp?a=1&b=1&s=612x612&w=0&k=20&c=BvovOirnr5g7fj2O3diOqsEdrBmTt6LXqWx9Ry9eJx4=' },
  { id: 9, name: 'Cardboard Waste', description: 'Cardboard waste suitable for recycling.', image: 'https://media.istockphoto.com/id/464866268/photo/time-to-recycle.webp?a=1&b=1&s=612x612&w=0&k=20&c=XurFYW8hEhg6D3NMz6FfEGNOPBGcvNfVSf6xjkZ-jzY=' },
  { id: 10, name: 'Aluminum Scrap', description: 'Aluminum scrap available for reuse.', image: 'https://media.istockphoto.com/id/491962627/photo/metal-cans-and-tins-prepared-for-recycling.webp?a=1&b=1&s=612x612&w=0&k=20&c=85VjlmGjVseGBY1ccw_6gSYbzHiiWMez_ChdtlYgXsc=' },
  { id: 11, name: 'Wood Waste', description: 'Recycled wood materials.', image: 'https://media.istockphoto.com/id/171298139/photo/scrap-wood.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZIDCdFLLz97KnLGFEe7j-cn4YGsXYvdDDRXrK6Kd6EY=' },
  { id: 12, name: 'Textile Scrap', description: 'Assorted textile materials for recycling.', image: 'https://media.istockphoto.com/id/1320159320/photo/the-background-of-the-rag-pieces-of-various-colors-are-stacked-together-in-a-scattered-mess.webp?a=1&b=1&s=612x612&w=0&k=20&c=TOc36FfldXkCD8rTCU_1SsReB7eiYaL_65ywFu0rr8U=' },
  { id: 13, name: 'Automobile Parts', description: 'Reusable parts from salvaged vehicles.', image: 'https://media.istockphoto.com/id/601372544/photo/heap-of-scrap-cars.webp?a=1&b=1&s=612x612&w=0&k=20&c=vpHlpa5FPrJwQMB4vLpEiSpCftsJoEFzbGnka6XVedo=' },
  { id: 14, name: 'Household Appliances', description: 'Old appliances ready for recycling.', image: 'https://media.istockphoto.com/id/1169191975/photo/discarded-air-conditioners-and-refrigeration-objects.webp?a=1&b=1&s=612x612&w=0&k=20&c=qHwY2AL6hBKVGs-2oD82juIOGyZ4VeI58P7_ZXL3_7s=' },
  { id: 15, name: 'Construction Debris', description: 'Recyclable construction materials.', image: 'https://media.istockphoto.com/id/1402897334/photo/metal-scrap-in-a-waste-sorting-container.webp?a=1&b=1&s=612x612&w=0&k=20&c=KPZg_eV2Sn3bSBih4PoXkh1-DnDMZCgp3ghCyuA_KfA=' },
  { id: 16, name: 'Furniture Waste', description: 'Old furniture ready for repurposing.', image: 'https://images.unsplash.com/photo-1632667226262-3f341ec5afff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlJTIwd2FzdGV8ZW58MHx8MHx8fDA%3D' },
  { id: 17, name: 'Battery Scrap', description: 'Battery scrap for specialized recycling.', image: 'https://media.istockphoto.com/id/179382731/photo/used-batteries-piled-randomly-in-big-container.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZTVtWdu2nU2hM2Xba_tqoN-nqfHOPxEufL1xVVURt3c=' },
  { id: 18, name: 'Dismantling Service', description: 'Dismantling of houses, shops and buildings', image: 'https://www.istockphoto.com/photo/backhoe-is-demolish-old-house-for-do-building-new-house-gm1169540427-323345051?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fdismantling&utm_medium=affiliate&utm_source=unsplash&utm_term=dismantling%3A%3A%3A give me is image address
    ' },
];

const Products = () => (
  <section id="products" className="py-20 bg-[#0D3B66bb]">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl text-[#FAF0CA] font-semibold mb-6 text-center">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#F4D35Edd] p-1 rounded-xl shadow-lg hover:shadow-xl transition-shadow hover:scale-[1.05] cursor-pointer transform"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <div className="p-4 bg-[#0D3B66] rounded-b-xl flex flex-col justify-between h-36">
              <div>
                <h3 className="text-xl text-white font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-400">{product.description}</p>
              </div>
              <a 
                href="#contact" 
                className="mt-4 flex items-center justify-center text-sm text-[#FAF0CA] hover:text-[#F4D35E] transition-colors"
              >
                <FaEnvelope className="mr-2" /> Contact Us
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Products;
