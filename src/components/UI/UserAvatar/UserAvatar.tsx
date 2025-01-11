import {FC} from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

interface UserAvatarProps {
    firstName: string;
    lastName: string;
    job: string;
    avatarUrl?: string;
}

const UserAvatar: FC<UserAvatarProps> = ({
                                             firstName,
                                             lastName,
                                             job,
                                             avatarUrl,
                                         }) => {
    function generateRandomDarkColor() {
        const r = Math.floor(Math.random() * 128);
        const g = Math.floor(Math.random() * 128);
        const b = Math.floor(Math.random() * 128);

        return `#${((r << 16) | (g << 8) | b).toString(16)}`;
    }

    const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
    const randomBgColor = generateRandomDarkColor();

    return (
        <div className={styles.avatar}>
            <div className={styles.avatar__wrapper}>
                <div className={styles.avatar__image_wrapper}>
                    {/* image */}
                    {avatarUrl ? (
                        <Image
                            src={avatarUrl}
                            alt={`${firstName} ${lastName}`}
                            width={50}
                            height={50}
                            className={styles.avatar__image}
                        />
                    ) : (
                        <div
                            className={styles.avatar__initials}
                            style={{backgroundColor: randomBgColor}}
                        >
                            {initials}
                        </div>
                    )}
                </div>
                <div className={styles.avatar__info}>
                    <h6>
                        {firstName} {lastName}
                    </h6>
                    <p>{job}</p>
                </div>
            </div>
        </div>
    );
};

export default UserAvatar;
