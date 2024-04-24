// In your component.ts, use `@cloudinary/url-gen` to generate your transformations.
import { Component, OnInit } from "@angular/core";
import { Cloudinary, CloudinaryVideo } from "@cloudinary/url-gen";

// Import the plugins you want to use.
import { lazyload } from "@cloudinary/ng";

@Component({
  selector: "plugins-video",
  templateUrl: "./videoPlugins.component.html",
  styleUrls: ["./app.component.css"]
})
export class VideoPluginsComponent implements OnInit {
  vid!: CloudinaryVideo;

  title = "Use the lazyload plugin, as shown in ";
  link =
    "https://cloudinary.com/documentation/angular_video_transformations#plugins";
  heading = "Plugins";

  // Use the lazyload plugin
  plugins = [lazyload()];

  ngOnInit() {
    // Create and configure your Cloudinary instance.
    const cld = new Cloudinary({
      cloud: {
        cloudName: "demo"
      },
      url: {
        analytics: false
      }
    });

    // Use the image with public ID, 'dog'.
    this.vid = cld.video("dog");
  }
}
