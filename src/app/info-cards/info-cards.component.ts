import { Component } from "@angular/core";
import { CommonModule } from "@angular/common"; // ✅ Import CommonModule

interface InfoCard {
  icon: string;
  label: string;
  count: number;
  borderColor: string;
}

@Component({
  selector: "app-info-cards",
  standalone: true,
  imports: [CommonModule], // ✅ Add CommonModule here
  templateUrl: "./info-cards.component.html",
  styleUrls: ["./info-cards.component.css"],
})
export class InfoCardsComponent {
  infoCards: InfoCard[] = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c2b6532714aea31dc2bc03b7d90450027575a9c76a8b2034a8a99ed76000f186?placeholderIfAbsent=true&apiKey=c7d059a1d3c448bba5a0eeb74220d7e7",
      label: "Cours",
      count: 3,
      borderColor: "border-red-500",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8915afaa1934a6ae2ddf598f60dfde1a4386739b3a7fa2f826750dcd6b3c45b4?placeholderIfAbsent=true&apiKey=c7d059a1d3c448bba5a0eeb74220d7e7",
      label: "Classes",
      count: 7,
      borderColor: "border-emerald-400",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d88f9934284bb2e413f9c6de90b8b278ef613a02e826d11b6786c4ba2ce2d232?placeholderIfAbsent=true&apiKey=c7d059a1d3c448bba5a0eeb74220d7e7",
      label: "Élèves",
      count: 112,
      borderColor: "border-sky-600",
    },
  ];
}
