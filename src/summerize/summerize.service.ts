import { Injectable, Inject } from '@nestjs/common';
import { Configuration, CreateCompletionRequest, OpenAIApi } from 'openai';
import { Db } from 'mongodb';

@Injectable()
export class SummerizeService {
  private readonly openAiApi: OpenAIApi;
  constructor(
    @Inject('DATABASE_CONNECTION')
    private readonly db: Db,
  ) {
    const configuration = new Configuration({
      organization: process.env.ORGANIZATION_ID,
      apiKey: process.env.OPENAI_API_KEY,
    });
    this.openAiApi = new OpenAIApi(configuration);
  }

  async findSummerize(summerize: string) {
    try {
      const params: CreateCompletionRequest = {
        prompt: summerize,
        model: 'text-davinci-003',
        temperature: 0.9,
        max_tokens: 7,
      };
      const response = await this.openAiApi.createCompletion(params);
      this.db.collection('summary').insertOne({
        question: summerize,
        summary: response.data.choices[0],
      });
      return response.data;
    } catch (err) {
      return err;
    }
  }
}
