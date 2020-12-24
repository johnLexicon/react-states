import React from 'react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div>
      <h1>Company Website</h1>
      <ul style={{ textAlign: 'left' }}>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="events">Events</Link>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export function About() {
  return (
    <div>
      <h1>[About]</h1>
    </div>
  );
}

export function Events() {
  return (
    <div>
      <h1>[Events]</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>[Contact]</h1>
    </div>
  );
}

export function Whoops404() {
  return (
    <div>
      <h1>Page Not Found</h1>
    </div>
  );
}
