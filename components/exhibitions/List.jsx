export function List({ exhibitions }) {
  // Group exhibitions by type (Solo or Group)
  const groupedExhibitions = exhibitions.reduce((acc, exhibition) => {
    const type = exhibition.type;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(exhibition);
    return acc;
  }, {});

  return (
    <div>
      {/* Display Solo exhibitions */}
      {groupedExhibitions["Solo"] && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 px-4 lg:px-10 underline">
            Solo Exhibitions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-10">
            {groupedExhibitions["Solo"].map((exhibition, index) => (
              <div key={index} className=" rounded-sm shadow-sm py-2">
                <h3 className="text-xl font-semibold">{exhibition.title}</h3>
                <p className="text-gray-500 text-xl mb-2">{exhibition.place}</p>
                <p className="text-gray-500 text-xl mb-4">{exhibition.time}</p>
                {/* <span className="inline-block px-2 py-1 rounded-sm bg-lime-500 text-white text-sm">
                  {exhibition.type}
                </span> */}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Display Group exhibitions */}
      {groupedExhibitions["Group"] && (
        <div>
          <h2 className="text-2xl font-semibold mb-4 px-4 lg:px-10 underline">
            Group Exhibitions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-10">
            {groupedExhibitions["Group"].map((exhibition, index) => (
              <div key={index} className=" rounded-sm shadow-sm py-2">
                <h3 className="text-xl font-semibold">{exhibition.title}</h3>
                <p className="text-gray-500 text-xl mb-2">{exhibition.place}</p>
                <p className="text-gray-500 text-xl mb-4">{exhibition.time}</p>
                {/* <span className="inline-block px-2 py-1 rounded-sm bg-gray-500 text-white text-sm">
                  {exhibition.type}
                </span> */}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
