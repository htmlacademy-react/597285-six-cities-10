import React from 'react';
import { ChangeEvent, useState, FormEvent } from 'react';
import { RATING_LEVELS } from '../../const';

type ReviewFormProps = {
  onSubmit: (commentFormState: string, ratingFormState: number) => void;
};

function ReviewForm({ onSubmit }: ReviewFormProps): JSX.Element {
  const [commentFormState, setCommentFormState] = useState('');
  const [ratingFormState, setRatingFormState] = useState(0);

  const ratingChangeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => setRatingFormState(() => +target.value);

  const getRatingStarsContent = () => {
    const content = [];

    for (let i = 5; i > 0; i--) {
      content.push(
        <>
          <input className="form__rating-input visually-hidden" name="rating" value={`${i}`} id={`${i}-stars`} type="radio" onChange={ratingChangeHandler} />
          <label htmlFor={`${i}-stars`} className="reviews__rating-label form__rating-label" title={`${RATING_LEVELS[i - 1]}`}>
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </>
      );
    }

    return content;
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={(evt: FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      onSubmit(commentFormState, ratingFormState);
    }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">

        {getRatingStarsContent()}

      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
        onInput={({ target }: ChangeEvent<HTMLTextAreaElement>) => {
          setCommentFormState(() => target.value);
        }}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" >Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
