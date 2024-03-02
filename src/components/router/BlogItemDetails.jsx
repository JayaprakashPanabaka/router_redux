import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const BlogItemDetails = () => {
    const [data, setdata] = useState({});

    const myParams = useParams()
    // console.log(myParams);
    const {id} = myParams

    const url = `https://apis.ccbp.in/blogs/${id}`;
    // console.log(url);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const jsonData = await response.json();
            setdata(jsonData);
        }
        fetchData()
    }, [id])

    // console.log(data);

    const {author, avatar_url, content, image_url, title, topic} = data



    return(
        <div>
            <h1>{title}</h1>
            <div className='flex'>
                <img className='h-12 rounded-full' src={avatar_url} alt={author} />
                <span>{author}</span>
            </div>
            <img src={image_url} alt={title} />
            <p>{content}</p>
        </div>
    )
}

export default BlogItemDetails