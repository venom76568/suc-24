import React from 'react'
import './memories.css';
import image1 from"../assets/image1.png";
import jQuery from 'jquery';

const Memories = () => (
<div>
<div class="imgLoader"></div>

<div class="container">

  <h1 class="title">
    SUC 2023 Memories
  </h1>

  <div class="credit">
    * Images loaded randomly from Picsum.photos
  </div>

  <div class="book">
    <div class="gap"></div>
    <div class="pages">
      <div class="page"></div>
      <div class="page"></div>
      <div class="page"></div>
      <div class="page"></div>
      <div class="page"></div>
      <div class="page"></div>
    </div>
    <div class="flips">
      <div class="flip flip1">
        <div class="flip flip2">
          <div class="flip flip3">
            <div class="flip flip4">
              <div class="flip flip5">
                <div class="flip flip6">
                  <div class="flip flip7"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

</div>
);

export default Memories;
