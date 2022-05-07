import { Link } from '@mui/material'
import React from 'react'

import style from './style.module.css'

export const Footer = () => {
    return (
        <section className={style.footer}>
            <div className={style.footer__copyright}>
                <p>Авторы проекта:</p>
                <p>
                    <Link href='https://github.com/yanaart93' underline='hover'>
                        {'Артюшкевич Яна'}
                    </Link>
                </p>
                <p>
                    <Link href='https://github.com/123ilya' underline='hover'>
                        {'Соболев Илья'}
                    </Link>
                </p>
                <p>
                    <Link href='https://github.com/Vladimir-Sukhoparov' underline='hover'>
                        {'Владимир Сухопаров'}
                    </Link>
                </p>

                <p>2022 ©</p>
            </div>
        </section>
    )
}
