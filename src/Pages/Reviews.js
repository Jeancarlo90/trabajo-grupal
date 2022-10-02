import  '../App.css'
import ReviewInfluencers from '../Components/ReviewInfluencers';
import UserReview from "../Components/UserReviews"



function Reviews(){
    return(
      <main>
        <UserReview></UserReview>
        <ReviewInfluencers></ReviewInfluencers>
      </main>
    )
}

export default Reviews;