import React, { Component } from "react";

export default class NewCard extends Component {
  render() {
    return (
      <div>
        <div id="contact">
          <p className="text-2xl ml-2 items-center justify-center text-center text-red-600 uppercase tracking-loose">
            <u>For more details contact us at:</u>
          </p>
        </div>
        <div class="grid p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-between ">
          <div className=" bg-gray-1000 w-full min-h-max gap-4 flex-wrap flex justify-center items-center">
            <div className="w-60 p-3 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
              {/* <!-- Image --> */}
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                alt=""
                className="h-40 object-cover rounded-xl"
              />
              <div className="p-2">
                {/* <!-- NAME --> */}
                <h2 clasNamclassNames="font-bold text-lg mb-2 ">Name: </h2>
                {/* <!-- Description -->
            <p className="text-sm text-gray-600">Simple Yet Beautiful Card Design with TaiwlindCss. Subscribe to our Youtube channel for more ...</p> */}
              </div>
              {/* // <!-- CONTACT NUMBER --> */}
              <div className="m-1 text-white bg-purple-600 px-1 py-1 rounded-md hover:bg-purple-800">
                <a role="button">
                  Contact No.- <br /> LinkedIn -{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-1000 w-full min-h-max gap-4 flex-wrap flex justify-center items-center">
            <div className="w-60 p-3 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
              {/* <!-- Image --> */}
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                alt=""
                className="h-40 object-cover rounded-xl"
              />
              <div className="p-2">
                {/* <!-- NAME --> */}
                <h2 clasNamclassNames="font-bold text-lg mb-2 ">Name: </h2>
                {/* <!-- Description -->
            <p className="text-sm text-gray-600">Simple Yet Beautiful Card Design with TaiwlindCss. Subscribe to our Youtube channel for more ...</p> */}
              </div>
              {/* // <!-- CONTACT NUMBER --> */}
              <div className="m-1 text-white bg-purple-600 px-1 py-1 rounded-md hover:bg-purple-800">
                <a role="button">
                  Contact No.- <br /> LinkedIn -{" "}
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-1000 w-full min-h-max gap-4 flex-wrap flex justify-center items-center">
            <div className="w-60 p-3 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
              {/* <!-- Image --> */}
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                alt=""
                className="h-40 object-cover rounded-xl"
              />
              <div className="p-2">
                {/* <!-- NAME --> */}
                <h2 clasNamclassNames="font-bold text-lg mb-2 ">Name: </h2>
                {/* <!-- Description -->
            <p className="text-sm text-gray-600">Simple Yet Beautiful Card Design with TaiwlindCss. Subscribe to our Youtube channel for more ...</p> */}
              </div>
              {/* // <!-- CONTACT NUMBER --> */}
              <div className="m-1 text-white bg-purple-600 px-1 py-1 rounded-md hover:bg-purple-800">
                <a role="button">
                  Contact No.-
                  <br /> LinkedIn -{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
