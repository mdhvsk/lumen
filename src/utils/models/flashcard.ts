

class Flashcard {

    private _title: string;
    private _detail: string;

    constructor(title: string, detail: string) {
        this._title = title;
        this._detail = detail;
      }

      get title(): string {
        return this._title;
      }
    
      set title(newTitle: string) {
        this._title = newTitle;
      }
    
      get detail(): string {
        return this._detail;
      }
    
      set detail(newDetail: string) {
        this._detail = newDetail;
      }
}

