import Link from 'next/link'
export default function FirstPage() {
    return (
        <div>
            <h2>Write your message here!</h2> 
            <Link href="/">Back to home</Link> //GO TO "/"(MAIN PAGE)
            <div>
                <button>최도현</button>
            </div>
            <h2>my Hobby</h2>
            <ul>
                <li>drawing</li>
                <li>reading book
                    <ul>
                        <li>노르웨이의 숲</li>
                        <li>국가론</li>
                        <li>오베라는 남자</li>
                    </ul>
                </li>
            </ul>
            <h2>my Pet</h2>
            <p>parrot</p>
        </div>
    )
}