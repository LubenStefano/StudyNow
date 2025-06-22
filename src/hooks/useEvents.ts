import { useState } from "react";

interface Event {
  title: string;
  date: Date;
  type: "upcoming" | "waiting" | "finished";
}

export default function useEvents() {
  const [events, setEvents] = useState<Record<string, Event[]>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});

  const fetchEvents = async (type: string) => {
    setLoading((prev) => ({ ...prev, [type]: true }));
    return new Promise<Event[]>((resolve) => {
      setTimeout(() => {
        const data: Event[] = [
          { title: "Math Final", date: new Date(2024, 5, 10), type: "upcoming" },
          { title: "Physics Midterm", date: new Date(2024, 6, 15), type: "waiting" },
          { title: "Chemistry Quiz", date: new Date(2024, 5, 20), type: "finished" },
          { title: "Biology Test", date: new Date(2024, 7, 5), type: "upcoming" },
          { title: "History Exam", date: new Date(2024, 8, 1), type: "waiting" },
          { title: "English Literature Quiz", date: new Date(2024, 6, 25), type: "finished" },
          { title: "Computer Science Final", date: new Date(2024, 5, 30), type: "upcoming" },
          { title: "Geography Test", date: new Date(2024, 7, 12), type: "waiting" },
          { title: "French Oral Exam", date: new Date(2024, 8, 10), type: "finished" },
          { title: "Economics Midterm", date: new Date(2024, 6, 18), type: "upcoming" },
        ];
        resolve(data.filter((event) => event.type === type));
      }, 2000); // Simulate 1 second delay
    }).finally(() => {
      setLoading((prev) => ({ ...prev, [type]: false }));
    });
  };

  const loadEvents = async (type: string) => {
    const fetchedEvents = await fetchEvents(type);
    setEvents((prev) => ({ ...prev, [type]: fetchedEvents }));
  };

  return { events, loading, loadEvents };
}
