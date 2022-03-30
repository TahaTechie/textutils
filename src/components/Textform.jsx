import React from 'react'

export default function Textform() {
    return (
        <div className="container">
            <div className="mb-3">
                <label for="myBox" class="form-label">Example textarea</label>
                <textarea className="form-control" id="myBox" rows="3"></textarea>
            </div>
        </div>
    )
}
