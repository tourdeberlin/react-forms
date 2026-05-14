import { useState } from "react";

const Post = () => {
  const [postContent, setPostContent] = useState("");
  const [status, setStatus] = useState("Ожидаем действия");
  const [error, setError] = useState(false);

  let isPublished = status === 'Пост опубликован';

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("Публикация...");

    setTimeout(() => {
      const hasError = Math.random() < 0.3;
            
      if (!hasError) {
        setStatus("Пост опубликован");
        setError(false);
      } else {
        setStatus('Ошибка публикации');
        setError(true);
      }
    }, 1500);
  }

  function handleReset() {
    setPostContent('');
    setError(false);
  }

  return (
    <div>
      <h2>Пост с черновиком, отправкой и статусами</h2>
      <form onSubmit={handleSubmit} onReset={handleReset}>
        <textarea
          name="post"
          rows="5"
          cols="45"
          placeholder="Введите текст поста..."
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          disabled={isPublished || false}
        ></textarea>
        <div className="buttons">
          <button
            type="button"
            onClick={() => setStatus("Сохранено как черновик")}
          >
            Сохранить как черновик
          </button>
          <button type="submit">Опубликовать</button>
          <button type="reset">Сбросить</button>
          <p style={error ? {color: 'red'} : {color: 'black'}}>{status}</p>
        </div>
      </form>
    </div>
  );
};

export default Post;
