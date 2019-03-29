import React, { Component } from "react";
import SiteNavigation from "./components/general/SiteNavigation.js";
import OpenedRequest from "./components/jobs/OpenedRequest.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SiteNavigation />

        <div className="container">
          <OpenedRequest />
        </div>

        <div id="splash">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>
                  <span className="display large">Modern Nights</span>
                  <small>A Vampire: The Masquerade Role Playing Game</small>
                </h1>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <h2>Quick Reference</h2>
                <ul>
                  <li>
                    <b>Setting:</b> Present-day San Francisco, California
                  </li>
                  <li>
                    <b>Playable Characters:</b> Vampires (Camarilla, Anarch and
                    Sabbat), plus revenants, ghouls, and humans (mundane or with
                    numina).
                  </li>
                  <li>
                    <b>Ruleset:</b> Vampire: The Masquerade 20th Anniversary
                    Edition
                    <p>
                      We use the following supplemental v20 source books:
                      <ul>
                        <li>Ghouls And Revenants</li>
                        <li>Lore Of The Clans</li>
                        <li>Hunters Hunted II</li>
                      </ul>
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <h2>Connect And Play</h2>
                <p>
                  Modern Nights is a MUSH (which is a text-based online gaming
                  platform). We're working on making Modern Nights playable
                  through the browser. In the meantime, you will need to
                  download a client such as <a href="#">MushClient</a> (for
                  Windows) or <a href="#">Atlantis</a> (for Mac).
                </p>
                <p>
                  To play, connect to <b>www.BigDamnMush.com</b> port{" "}
                  <b>1777</b>.
                </p>
                <p>
                  Connection issues? Try connecting directly to{" "}
                  <b>45.56.127.110</b> port <b>1777</b>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
