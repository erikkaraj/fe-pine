import { useEffect, useState } from "react";
import SelectList from "../../components/input/SelectList";
import { getCategories } from "../../core/Category";
import i18n from "i18next";

export default function BlogCreate() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((resCategories) =>
      resCategories.map((resCategory) =>
        setCategories((categories) => [
          ...categories,
          {
            value: resCategory.id,
            label: resCategory.name,
            translation: resCategory.translation,
          },
        ])
      )
    );
  }, []);

  const [categoriesTranslated, setCategoriesTranslated] = useState([]);
  useEffect(() => {
    setCategoriesTranslated(
      categories.filter((category) => category.translation === i18n.language)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories, i18n.language]);

  const [blogPost, setBlogPost] = useState({
    category_id: "",
    title: "",
    subtitle: "",
    main_image: {},
  });

  // eslint-disable-next-line no-unused-vars
  const [editor, setEditor] = useState();

  return (
    <div className="flex flex-col w-full items-center pt-12 ">
      <div className="flex flex-col w-1/2 space-y-4">
        <div>
          <h1 className="text-gray-pin3 font-bold pl-10">Zgjidhe Kategorine</h1>
          <SelectList
            placeholder="Lloji i llogarise"
            options={categoriesTranslated}
            value={
              blogPost
                ? categoriesTranslated.find((el) => el.code === blogPost)
                : ""
            }
            onChange={(target) => {
              setBlogPost({
                ...blogPost,
                category_id: target.value ? target.value : "",
              });
            }}
          />
        </div>
        <div>
          <h1 className="text-gray-pin3 font-bold pl-10">Title</h1>
          <input
            type="text"
            className="flex w-full border-1 border-gray-pin4 rounded-xl h-10 p-2 text-center"
            value={blogPost?.title}
            onChange={(e) => {
              setBlogPost({ ...blogPost, title: e.target.value });
            }}
          />
        </div>
        <div>
          <h1 className="text-gray-pin3 font-bold pl-10">SubTitle</h1>
          <input
            type="text"
            className="flex w-full border-1 border-gray-pin4 rounded-xl h-10 p-2 text-center"
            value={blogPost?.subtitle}
            onChange={(e) => {
              setBlogPost({ ...blogPost, subtitle: e.target.value });
            }}
          />
        </div>
        <div>
          <h1 className="text-gray-pin3 font-bold pl-10">MainImage</h1>
          <div className="flex flex-row">
            <input
              type="file"
              accept="image/*"
              id="icon-button-file"
              onChange={(e) =>
                setBlogPost({ ...blogPost, main_image: e.target.files[0] })
              }
            />
            {blogPost.main_image?.name !== undefined ? (
              <img
                className="h-24 w-24 border-1 rounded-lg"
                src={URL.createObjectURL(blogPost?.main_image)}
                alt="img"
              />
            ) : (
              <img
                className="h-24 w-24 border-1 rounded-lg"
                src="svg/logo.svg"
                alt="img"
              />
            )}
          </div>
        </div>
      </div>
      <div className="flex h-128 m-18 w-10/12 border-1">RichTextEditor</div>

      <button
        onClick={() => {
          console.log(editor);
        }}
      >
        save
      </button>
    </div>
  );
}
