"use client"

import { useState } from 'react';

export default function VideoUpload() {
  const [video, setVideo] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleChange = (event) => {
    setVideo(event.target.files[0]); // Almacena el archivo seleccionado
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('video', video); // Adjunta el archivo de video
    formData.append('title', title); // Agrega el título
    formData.append('description', description); // Agrega la descripción

    try {
        const response = await fetch(`${window.location.origin}/api/v1/upload/videos`, {
            method: 'POST',
            body: formData,
          });

      const result = await response.json();
      console.log('Respuesta del servidor:', result);
    } catch (error) {
      console.error('Error al subir el video:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="video/*" onChange={handleChange} required />
      <input 
        type="text" 
        placeholder="Título" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required 
      />
      <textarea 
        placeholder="Descripción" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        required 
      />
      <button type="submit">Subir Video</button>
    </form>
  );
}
