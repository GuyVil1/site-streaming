import React, { Component } from 'react';
import { VideoPlayer, MvPlayerList } from '../components'

import '../css/MoviePlayer.css';

const selectedMovie = {
    duration: "2h00",
    id: 458796,
    imageUrl: "https://img.ohmymag.com/article/avatar-2/avatar_970fc8aba9629d5c2ed244fd790d6f945fd918dd.jpg",
    position: 1,
    title: "Avatar 2",
    videoUrl: 'https://youtu.be/Iy-xDwYx6nQ'
}

const movies = [
    {
        duration: "2h00",
        id: 458797,
        imageUrl: "https://img.ohmymag.com/article/avatar-2/avatar_970fc8aba9629d5c2ed244fd790d6f945fd918dd.jpg",
        position: 1,
        title: "Avatar 2",
        videoUrl: 'https://youtu.be/Iy-xDwYx6nQ'
    },
    {
        duration: "2h00",
        id: 458798,
        imageUrl: "https://img.ohmymag.com/article/avatar-2/avatar_970fc8aba9629d5c2ed244fd790d6f945fd918dd.jpg",
        position: 1,
        title: "Avatar 2",
        videoUrl: 'https://youtu.be/Iy-xDwYx6nQ'
    },
    {
        duration: "2h00",
        id: 458799,
        imageUrl: "https://img.ohmymag.com/article/avatar-2/avatar_970fc8aba9629d5c2ed244fd790d6f945fd918dd.jpg",
        position: 1,
        title: "Avatar 2",
        videoUrl: 'https://youtu.be/Iy-xDwYx6nQ'
    },
    {
        duration: "2h00",
        id: 458791,
        imageUrl: "https://img.ohmymag.com/article/avatar-2/avatar_970fc8aba9629d5c2ed244fd790d6f945fd918dd.jpg",
        position: 1,
        title: "Avatar 2",
        videoUrl: 'https://youtu.be/Iy-xDwYx6nQ'
    }

]

class MoviePlayer extends Component {
    render(){
        return(
            <div className="moviePlayer">
                <VideoPlayer 
                    videoUrl={selectedMovie.videoUrl}
                    imageUrl={selectedMovie.imageUrl}
                />
                <MvPlayerList 
                    movies={movies}
                    selectedMovie={selectedMovie}    
                />
            </div>
        )
    }
}

export { MoviePlayer };