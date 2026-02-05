import { colors } from '@/utils/colors';
import { collections, sizes } from '@/utils/data/data';
import { useState } from 'react';

const FilterColumn = () => {
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
      
      {/* Sizes */}
      <div>
        <h3 className="text-sm font-bold text-gray-900 mb-4 border-b-1 border-black">Sizes</h3>
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
        <h3 className="text-sm font-bold text-gray-900 mb-4 border-b-1 border-black">Color</h3>
        <div className="flex gap-3">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => toggleColor(color.name)}
              className={`w-8 h-8 rounded-full hover:cursor-pointer ${color.value} ${
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
        <h3 className="text-sm font-bold text-gray-900 mb-4 border-b-1 border-black">Collections</h3>
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