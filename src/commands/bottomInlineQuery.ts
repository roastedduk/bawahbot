import { generateBottomNoise } from './../lib/generator';
import { Context } from 'telegraf';
import { InlineQueryResultArticle } from 'telegraf/typings/core/types/typegram';

export default (ctx: Context) => {
    const options : InlineQueryResultArticle[] = []

    // generate 10 options
    for (let x=0; x<10; ++x) {
        const noise = generateBottomNoise()
        options.push({
            type: 'article',
            id: String(x),
            title: noise,
            input_message_content: {
                message_text: noise
            }
        })
    }

    return ctx.answerInlineQuery(options)
}