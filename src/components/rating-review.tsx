import React from 'react'

interface RatingReviewProps {
  rating: number
  setRating: (rating: number) => void
}

function RatingReview({ rating, setRating }: RatingReviewProps) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map(star => {
        return (
          <span
            key={star}
            className="start"
            style={{
              cursor: 'pointer',
              color: rating >= star ? 'gold' : 'gray',
              fontSize: `25px`,
            }}
            onClick={() => {
              setRating(star)
            }}
          >
            {' '}
            ★{' '}
          </span>
        )
      })}
    </div>
  )
}

export default RatingReview
