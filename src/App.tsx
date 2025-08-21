import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-white px-4 md:px-6 lg:px-8">
      <div className="mx-auto max-w-screen-xl">
        {/* Logo */}
        <div className="pt-8 md:pt-12 lg:pt-16 pb-6 md:pb-8 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-wide">
            Aura
          </h1>
        </div>

        {/* Main Hero Container with Gradient */}
        <div className="flex justify-center">
          <div className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-gray-200 via-blue-500 to-white min-h-[600px] md:min-h-[700px] lg:min-h-[800px] xl:min-h-[900px] flex flex-col justify-between p-8 md:p-12 lg:p-16 xl:p-20">
            
              {/* Empty content area - space for custom text later */}
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center text-white/30 text-sm md:text-base lg:text-lg">
                  [Custom content area]
                </div>
              </div>

              {/* Bottom button */}
              <div className="flex justify-center pb-8 md:pb-12 lg:pb-16">
                <button className="bg-gray-400/30 backdrop-blur-sm text-white/70 px-8 md:px-10 lg:px-12 xl:px-14 py-3 md:py-4 lg:py-5 rounded-full text-sm md:text-base lg:text-lg font-medium border border-white/20 hover:bg-gray-400/40 transition-colors">
                  Start scrolling
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Additional spacing at bottom */}
        <div className="h-20 md:h-24 lg:h-32 xl:h-40"></div>
      </div>
    </div>
  );
}

export default App;