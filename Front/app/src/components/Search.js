import { useState, useEffect } from 'react';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [matchingAds, setMatchingAds] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      fetch(`http://localhost:5000/api/search?q=${searchTerm}`)
        .then(res => res.json())
        .then(data => setMatchingAds(data));
    }
  }, [searchTerm]);

  // useEffect(() => {
  //     fetch(`http://localhost:5000/api/search?q=${searchTerm}`)
  //       .then(res => res.json())
  //       .then(data => setMatchingAds(data));
  // });

  const handleSearchInputChange = e => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearchInputChange} />
      {matchingAds.length > 0 && searchTerm!==''? (
        <div>
          {matchingAds.map(ad => (
            <div key={ad.imageUrl}>
              <img src={ad.imageUrl} alt={ad.company} />
              <p>{ad.company}</p>
            </div>
          ))}
        </div>
      ) : ( 
        <p>Please search!!.</p>
      )} 
    </div>
  );
}

export default Search;
