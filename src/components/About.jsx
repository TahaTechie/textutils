import React from 'react'

export default function About() {
    return (
        <div class="accordion container" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        TextUtils About
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This is about the TextUtils Website.</strong> This Website is about the text manipuation in way of our own choice
                    </div>
                </div>
            </div>
        </div>
    )
}
