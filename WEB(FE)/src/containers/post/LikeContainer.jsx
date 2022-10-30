import { click } from '@testing-library/user-event/dist/click';
import { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Responsive from '../../components/common/Responsive';
import LikeBtn from '../../components/post/Like';
import { addLike } from '../../modules/post';
import AskLoginModal from '../common/AskLoginModal';

const LikeWrapper = styled(Responsive)`
  margin-bottom: 4rem;
`;

const LikeContainer = () => {
  const [clicked, setClicked] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const { postId } = useParams();
  const dispatch = useDispatch();
  const { post, user } = useSelector(({ post, user, loading }) => ({
    post: post.post,
    loading: loading['post/ADD_LIKE'],
    user: user.user,
  }));

  const [likeCnt, setLikeCnt] = useState(0);
  useEffect(() => {
    if (!post) return;
    console.log(post.likes);
    setLikeCnt(post.likes.length);
  }, [post]);

  const onClick = () => {
    if (!user) return;
    setClicked(!clicked);
    dispatch(addLike({ postId }));
    if (!clicked) setLikeCnt(likeCnt + 1);
    else setLikeCnt(likeCnt - 1);
  };

  return (
    <>
      <LikeWrapper>
        <LikeBtn likeCnt={likeCnt} clicked={clicked} onClick={onClick} />
      </LikeWrapper>
      <AskLoginModal visible={isLogin} setVisible={setIsLogin} />
    </>
  );
};

export default LikeContainer;
