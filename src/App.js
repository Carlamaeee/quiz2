import React, { useState } from "react";
import barbieMovies from "./barbieData";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState(barbieMovies);

  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const filtered = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleUpload = (e) => {
    e.preventDefault();

    if (!title || !year || !description || !imageFile) {
      alert("Please fill in all fields and select an image.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const newMovie = {
        title,
        year,
        description,
        image: reader.result, 
      };
      setMovies([newMovie, ...movies]); 
      setTitle("");
      setYear("");
      setDescription("");
      setImageFile(null);
    };
    reader.readAsDataURL(imageFile);
  };

  return (
    <div className="App">
      <h1>Barbie Movies</h1>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search movie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Upload Form */}
      <form onSubmit={handleUpload} className="upload-form">
        <input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImageFile(e.target.files[0])}
        />
        <button type="submit">Upload Movie</button>
      </form>

      {/* Movie Grid */}
      <div className="grid">
        {filtered.map((movie, index) => (
          <div className="card" key={index}>
            <img src={movie.image} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>({movie.year})</p>
            <p>{movie.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
