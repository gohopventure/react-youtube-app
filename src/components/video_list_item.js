import React from 'react';

const VideoListItem = ({ video, onVideoSelected }) => {
    const title = video.snippet.title 
    const imageUrl = video.snippet.thumbnails.default.url;
    
    return (
        <li className="list-group-item">
            <div className="video-list-media">
                <div className="media-left">
                    <img src={imageUrl} className='media-object'/>
                </div>

                <div className='media-body'>
                    <div className='media-heading'>{ title }</div>
                </div>
            </div>
        </li>
    )
}

export default VideoListItem;