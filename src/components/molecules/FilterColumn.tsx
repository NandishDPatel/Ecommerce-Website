import { colors } from '@/utils/colors';
import { collections, sizes } from '@/utils/data/data';
import { useState } from 'react';

const FilterColumn = () => {
  const [priceRange, setPriceRange] = useState(50);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const toggleSize = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  return (
    <div className="w-64 p-6 space-y-8">
      {/* Price Range */}
      <div>
        <h3 className="text-sm font-bold text-gray-900 mb-4 pb-2 border-b-2 border-teal-400 inline-block">
          Price Range
        </h3>
        <div className="mt-6">
          <input
            type="range"
            min="0"
            max="100"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-400"
          />
          <div className="flex justify-between mt-2 text-xs text-gray-600">
            <span>$0</span>
            <span>$1000+</span>
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="text-sm font-bold text-gray-900 mb-4">Sizes</h3>
        <div className="grid grid-cols-2 gap-3">
          {sizes.map((size) => (
            <label key={size} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={selectedSizes.includes(size)}
                onChange={() => toggleSize(size)}
                className="w-4 h-4 text-teal-400 border-gray-300 rounded focus:ring-teal-400"
              />
              <span className="ml-2 text-sm text-gray-700">{size}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Color */}
      <div>
        <h3 className="text-sm font-bold text-gray-900 mb-4">Color</h3>
        <div className="flex gap-3">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => toggleColor(color.name)}
              className={`w-8 h-8 rounded-full ${color.value} ${
                selectedColors.includes(color.name)
                  ? 'ring-2 ring-offset-2 ring-black'
                  : ''
              } transition-all hover:scale-110`}
              aria-label={color.name}
            />
          ))}
        </div>
      </div>

      {/* Collections */}
      <div>
        <h3 className="text-sm font-bold text-gray-900 mb-4">Collections</h3>
        <div className="space-y-3">
          {collections.map((collection) => (
            <button
              key={collection.name}
              className="w-full flex justify-between items-center text-left text-sm text-gray-700 hover:text-teal-500 transition-colors"
            >
              <span>{collection.name}</span>
              <span className="text-xs text-gray-400">({collection.count})</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterColumn;