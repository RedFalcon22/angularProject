import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-messaging",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./messaging.component.html",
  styleUrls: ["./messaging.component.css"],
})
export class MessagingComponent {
  messages = [
    { sender: "Alice", text: "Hey! How are you?" },
    { sender: "Bob", text: "I'm good, thanks! How about you?" },
    { sender: "Alice", text: "Doing great! Want to catch up later?" },
  ];

  sendMessage(newMessage: string) {
    if (newMessage.trim()) {
      this.messages.push({ sender: "You", text: newMessage });
    }
  }
}
