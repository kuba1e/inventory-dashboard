import { Star } from "lucide-react";
import React from "react";

type Props = {
  rating?: number;
};

export default function Rating({ rating = 0 }: Props) {
  return [1, 2, 3, 4, 5].map((star) => (
    <Star
      key={star}
      className={"w-4 h-4"}
      color={star <= rating ? "#FFC107" : "#E4E5E9"}
    />
  ));
}
