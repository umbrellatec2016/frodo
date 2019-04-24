/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { getHtmlTagDefinition } from './html_tags';
import { DEFAULT_INTERPOLATION_CONFIG } from './interpolation_config';
import { Parser } from './parser';
export { ParseTreeResult, TreeError } from './parser';
export class HtmlParser extends Parser {
    constructor() { super(getHtmlTagDefinition); }
    parse(source, url, parseExpansionForms = false, interpolationConfig = DEFAULT_INTERPOLATION_CONFIG) {
        return super.parse(source, url, parseExpansionForms, interpolationConfig);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHRtbF9wYXJzZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvbWxfcGFyc2VyL2h0bWxfcGFyc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUNqRCxPQUFPLEVBQUMsNEJBQTRCLEVBQXNCLE1BQU0sd0JBQXdCLENBQUM7QUFDekYsT0FBTyxFQUFrQixNQUFNLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFFakQsT0FBTyxFQUFDLGVBQWUsRUFBRSxTQUFTLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFFcEQsTUFBTSxPQUFPLFVBQVcsU0FBUSxNQUFNO0lBQ3BDLGdCQUFnQixLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFOUMsS0FBSyxDQUNELE1BQWMsRUFBRSxHQUFXLEVBQUUsc0JBQStCLEtBQUssRUFDakUsc0JBQTJDLDRCQUE0QjtRQUN6RSxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO0lBQzVFLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtnZXRIdG1sVGFnRGVmaW5pdGlvbn0gZnJvbSAnLi9odG1sX3RhZ3MnO1xuaW1wb3J0IHtERUZBVUxUX0lOVEVSUE9MQVRJT05fQ09ORklHLCBJbnRlcnBvbGF0aW9uQ29uZmlnfSBmcm9tICcuL2ludGVycG9sYXRpb25fY29uZmlnJztcbmltcG9ydCB7UGFyc2VUcmVlUmVzdWx0LCBQYXJzZXJ9IGZyb20gJy4vcGFyc2VyJztcblxuZXhwb3J0IHtQYXJzZVRyZWVSZXN1bHQsIFRyZWVFcnJvcn0gZnJvbSAnLi9wYXJzZXInO1xuXG5leHBvcnQgY2xhc3MgSHRtbFBhcnNlciBleHRlbmRzIFBhcnNlciB7XG4gIGNvbnN0cnVjdG9yKCkgeyBzdXBlcihnZXRIdG1sVGFnRGVmaW5pdGlvbik7IH1cblxuICBwYXJzZShcbiAgICAgIHNvdXJjZTogc3RyaW5nLCB1cmw6IHN0cmluZywgcGFyc2VFeHBhbnNpb25Gb3JtczogYm9vbGVhbiA9IGZhbHNlLFxuICAgICAgaW50ZXJwb2xhdGlvbkNvbmZpZzogSW50ZXJwb2xhdGlvbkNvbmZpZyA9IERFRkFVTFRfSU5URVJQT0xBVElPTl9DT05GSUcpOiBQYXJzZVRyZWVSZXN1bHQge1xuICAgIHJldHVybiBzdXBlci5wYXJzZShzb3VyY2UsIHVybCwgcGFyc2VFeHBhbnNpb25Gb3JtcywgaW50ZXJwb2xhdGlvbkNvbmZpZyk7XG4gIH1cbn1cbiJdfQ==