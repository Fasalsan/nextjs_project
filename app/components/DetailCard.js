/* eslint-disable @next/next/no-img-element */
'use client';

export default function DetailCard({ title, description, imageUrl }) {
  return (
    <div className="p-8 max-w-xl mx-auto">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-60 object-cover rounded mb-4"
      />
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
