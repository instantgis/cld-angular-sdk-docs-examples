import { Component, OnInit } from "@angular/core";

// Import the Cloudinary classes.
import { Cloudinary, CloudinaryImage } from "@cloudinary/url-gen";

// Import any actions required for transformations.
import { Adjust } from "@cloudinary/url-gen/actions";

@Component({
  selector: "syntax-overview-image",
  templateUrl: "./example.component.html",
  styleUrls: ["./app.component.css"]
})
export class SyntaxOverviewComponent implements OnInit {
  img!: CloudinaryImage;

  title = "Replace the most prominent color with light blue, as shown in ";
  link =
    "https://cloudinary.com/documentation/angular_image_transformations#syntax_overview";
  heading = "Syntax overview";

  ngOnInit() {
    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
      cloud: {
        cloudName: "demo"
      }
    });

    // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
    this.img = cld.image("sample");

    // Replace the most prominent color with light blue
    this.img.adjust(Adjust.replaceColor("lightblue").tolerance(17));
  }
}
